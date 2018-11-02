function hazelMatchFile(theFile, inputAttributes)
{
    const app = Application.currentApplication();
    app.includeStandardAdditions = true;
    app.displayDialog('Hello world');
    return true;
}

return hazelMatchFile(theFile, inputAttributes);