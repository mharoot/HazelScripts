function run() {
    const app = Application.currentApplication();
    app.includeStandardAdditions = true;
    app.displayDialog('Hello world');
    return true;
}

return run();