function hazelMatchFile(theFile, inputAttributes)
{
   //-- Add your logic here.
   //-- 'theFile' is an alias to the file that matched.
   //-- 'inputAttributes' is an JavaScript array of the values of any attributes you told Hazel to pass in.
   //-- Make sure to return true or false (or optionally a record) to indicate whether the file passes this script

    function Left(str, n){
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else
        return String(str).substring(0,n);
    }
    function Right(str, n){
        if (n <= 0)
        return "";
        else if (n > String(str).length)
        return str;
        else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
        }
    }


    var sTitle = inputAttributes[0];

    /* ===========================================
    Note: All oldTitles assigned by Neatworks look like this: 
            'Neat Document MyFileName Here 12 19 2012' or
            'Neat Receipt MyFileName Here 12 19 2012 $200.00''
    =========================================== */

    var oldTitle = sTitle;
    var titleDate = Right(oldTitle,10);
    var titleText = Left(oldTitle, oldTitle.length-11);
    titleText = titleText.replace('Neat Document ','')
    titleText = titleText.replace('Neat Receipt ','')
    var newTitle = titleDate.substring(6,10) +'-'+ titleDate.substring(0,2) +'-'+ titleDate.substring(3,5) +' '+ titleText ;


    /*================  This code allowed me to test the script in the OS X script editor ===============
    debugger

    app = Application.currentApplication()
    app.includeStandardAdditions = true
    //app.say('Hello world')
    app.displayDialog('newTitle = ', {
        withTitle: 'Debugging',
        defaultAnswer: newTitle
    })
    ==================*/

    return {'hazelOutputAttributes': [newTitle]};

}
   