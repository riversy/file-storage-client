import React from 'react'
import {map} from 'lodash'
import {Table} from 'semantic-ui-react'
import FileUpload from "./FileUpload";


class FileList extends React.Component {
    state = {
        files: [],
    };

    formatBytes = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        let k = 1024,
            decimals = 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    }

    handleFileUpload = (file) => {
        const {type, size, name} = file;
        const files = this.state.files;
        files.push({type, size, name});
        this.setState({
            files: files,
        });
    }

    render() {
        console.log(this.state.files);

        const FileComponents = map(this.state.files, (file) => {
            const {type, size, name} = file
            return <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{this.formatBytes(size)}</Table.Cell>
            </Table.Row>
        })

        return (
            <>
                <FileUpload onUpload={this.handleFileUpload}/>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>File Name</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Size</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {FileComponents}
                    </Table.Body>
                </Table>
            </>
        )
    }
}

export default FileList;