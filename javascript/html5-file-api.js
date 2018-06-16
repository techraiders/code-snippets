/*
What you can do with the File API:
  1. Perform client-side file operations, such as limiting the size of uploads.
  2. Restricts the kinds of files that can be uploaded to a server.
  3. Generate thumbnail versions of images that are being uploaded.
  4. Check to see if the modification date of a local file is before or after a certain date.
  5. Parse the content of files locally to get detailed information. (e.g Spell check for a text file)
  6. Modify file contents before they are sent off to the server.
  
Important File API Interfaces:
  
  1. Blob: Represents a contiguous amount of raw data - text, image etc.
  size: size of the blob in bytes
  type: the MIME type of the blob (text/plain, image/png, etc.)
  slize: returns a new Blob object of the given range of bytes and optional MIME type

Note: We don't work with Blob interface directly. We use File interface which inherits from the Blob
interface

  2. File: Inherits from Blob, represents an actual file.
  name: the actual name of the file.
  LastModificationDate: When the file was last modified.
  
  3. FileList: Represents a sequence of one or more File objects. You don't work with FileList interface directly,
  you just operate on it as if it were an array.
  
  4. FileReader: Provides a way to read the contents of a given file. For security reason, user must have some interaction
  in the process by selecting one to more files to read the data from. For security reason, there is no way to store a file
  path and then read it later.
   
   readyState: indicates the reader in EMPTY(0), LOADING(1), or DONE(2).
   result: contains the contents of the file that have been read so far. We can read entire content, or a portion or chunk.
   error: any error code associated with the read operation.
   
   readAsText(): reads the file as a text file.
   readAsDataURL(): returns the file data as an encoded data://URL typecally used for images
   readAdArrayBuffer(): reads the data as a buffer of bytes.
   readAsBinaryString(): reads the data as a string of binary data
   
  5. FileError: Contains any error information about the read process. FileError interface is used for asynchronous reading.
  
  6. FileException: Contains any error information about the read process. FileException interface is used for synchronous reading.
  NOT_FOUND_ERR (1) : File or Blob couldn't be found during the read.
  SECURITY_ERR (2) : Browser determined a security issue.
  ABORT_ERR (3) : The read was aborted by the user or system.
  NOT_READABLE_ERR (4) : Browser determined a security issue.
  ENCODING_ERR (5) : The read was aborted by the user or system.
*/
