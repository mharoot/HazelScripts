/**
 * For  embedded  scripts, no function is needed. 
 * For  external  scripts, Hazel requires a function called hazelMatchFile. 
 * @reference https://www.noodlesoft.com/manual/hazel/attributes-actions/using-applescript-or-javascript/
 */

/**
 * 
 * @param {String} theFile is an alias to the file that matched.
 * @param {Array} inputAttributes values of any attributes you told Hazel to pass in.
 */
function hazelMatchFile(theFile, inputAttributes)
{

    alert(inputAttributes);
    // — Add your logic here.
    file = new File(theFile);
    if(file) return true;


    // — Be sure to return true or false (or optionally an object) to indicate whether the file passes this script
    return false;

}

hazelMatchFile('README.md', ["Passes JavaScript"]);