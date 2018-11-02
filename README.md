# AppleScript/JavaScript in Rule Conditions
1. You can use AppleScript or JavaScript to supply custom logic for a rule condition. 
2. The primary requirement is that your script return  true  or  false  (as a value or a record/object—see “Returning Values from the Script” below).



### Passing Values to the Script
1. The variable  theFile  carries an alias to the file or folder currently being processed, which Hazel passes to the script.
2. For  embedded  scripts, no handler (AppleScript) or function (JavaScript) is needed. 
3. For  external  scripts, Hazel requires a handler (AppleScript) or function (JavaScript) called  hazelMatchFile . 
4. The handler or function takes two arguments— theFile  (as described just above) and  inputAttributes , a list of input attribute values (see the section just ahead on  Input Attributes ) .

### Below is a template you can use for external AppleScripts:
```
on hazelMatchFile(theFile, inputAttributes)

    — Add your logic here.

    — ‘theFile’ is an alias to the file that matched.

    — ‘inputAttributes’ is an AppleScript list of the values of any attributes you told Hazel to pass in.

    — Be sure to return true or false (or optionally a record) to indicate whether the file passes this script.

end hazelMatchFile
```

### And here is the corresponding JavaScript template:
```
function hazelMatchFile(theFile, inputAttributes)

{

    — Add your logic here.

    — ‘theFile’ is an alias to the file that matched.

    — ‘inputAttributes’ is a JavaScript array of the values of any attributes you told Hazel to pass in.

    — Be sure to return true or false (or optionally an object) to indicate whether the file passes this script

}
```

### Returning Values from the Script
##### Returing True/False
To tell Hazel whether the file or folder being processed matches your condition, have your script return  true  or  false . For example:
```
— your supporting code here

if (your logical test here)

    return true

else

    return false

end if
```

##### Returning a Record
You can optionally return a  record  (AppleScript) or an  object  (JavaScript) instead of  true  or  false . This method allows your script to send values back to Hazel. An AppleScript record looks something like this:
```
{key1:value1, key2:value2,…}
```
 
 ### References
- [Hazel Manual](https://www.noodlesoft.com/manual/hazel)
  - [Attributes & Actions](https://www.noodlesoft.com/manual/hazel/attributes-actions/using-applescript-or-javascript/)


  Embedded vs. External AppleScripts/JavaScripts

Hazel can run AppleScripts or JavaScripts in either of two ways:

Embedded:  You can type (or paste) your script directly into your Hazel rule. To do this, choose “Passes AppleScript”/“Passes JavaScript” as the attribute for a condition, or “Run AppleScript”/“Run JavaScript” for an action, and then click the Edit Script     icon. Enter your script in the popover that appears (as illustrated below), optionally click the Build     button to verify your syntax, and click the X     icon when you’re done. Embedded scripts are stored with your rules and therefore do not need to be transferred separately when copying, moving, sharing, or syncing your rules.



External:  If your JavaScript already exists as a standalone script ( .scpt ) file, you can simply point Hazel to that script. 


To do this, choose “Passes AppleScript”/“Passes JavaScript” as the attribute for a condition, or “Run AppleScript”/“Run JavaScript” for an action, 
choose “Other” from the second pop-up menu, navigate to the file on disk, and click “Open.” 

Because external scripts are stored separately from Hazel rules, they must be transferred separately when copying, moving, sharing, or syncing rules to another Mac.