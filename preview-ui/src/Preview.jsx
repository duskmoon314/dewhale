import { Upload, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const removeFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-gray-100 rounded-md">
      <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-10 h-10 text-gray-400" />
          <p className="mt-1 text-sm text-gray-400">Drag 'n' drop some files here, or click to select files</p>
        </div>
        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} multiple />
      </label>
      <div className="w-full">
        {files.length > 0 && (
          <div className="flex flex-col space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between px-4 py-2 bg-white rounded-md shadow">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-700">{file.name}</span>
                </div>
                <button onClick={() => removeFile(file.name)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Button variant="solid" className="mt-4">Upload Files</Button>
    </div>
  );
}