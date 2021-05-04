import React from 'react';
import {Button} from "semantic-ui-react";
import {each} from 'lodash'

class FileUpload extends React.Component {
    fileInputRef = React.createRef();

    fileChange = (e) => {
        each(e.target.files, (file) => {
            console.log(file);
            this.props.onUpload(file)
        });
    };

    render() {
        return (
            <div>
                <Button
                    content="Choose File"
                    labelPosition="left"
                    icon="file"
                    onClick={() => this.fileInputRef.current.click()}
                />
                <input
                    ref={this.fileInputRef}
                    type="file"
                    hidden
                    multiple
                    onChange={this.fileChange}
                />
            </div>
        );
    }
}

export default FileUpload;