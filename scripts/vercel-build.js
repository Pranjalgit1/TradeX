const { cpSync, existsSync, mkdirSync, rmSync } = require("fs");
const { join } = require("path");
const { spawnSync } = require("child_process");

const root = join(__dirname, "..");

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: { ...process.env, ...options.env },
    shell: process.platform === "win32",
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function hasInstall(app, marker) {
  return existsSync(join(root, app, marker));
}

function installAndBuild(app, env = {}) {
  const appDir = join(root, app);
  const lockFile = join(appDir, "package-lock.json");
  const reactScripts = join("node_modules", ".bin", process.platform === "win32" ? "react-scripts.cmd" : "react-scripts");
  const installCommand = existsSync(lockFile) ? "ci" : "install";

  if (process.env.VERCEL || !hasInstall(app, reactScripts)) {
    run("npm", ["--prefix", app, installCommand]);
  }

  run("npm", ["--prefix", app, "run", "build"], {
    env: { CI: "false", ...env },
  });
}

installAndBuild("frontend");
installAndBuild("kite", { PUBLIC_URL: "/kite" });

if (process.env.VERCEL || !hasInstall("BackEnd", join("node_modules", "express"))) {
  run("npm", ["--prefix", "BackEnd", "ci", "--omit=dev"]);
}

const kiteTarget = join(root, "frontend", "build", "kite");
rmSync(kiteTarget, { recursive: true, force: true });
mkdirSync(kiteTarget, { recursive: true });
cpSync(join(root, "kite", "build"), kiteTarget, { recursive: true });
