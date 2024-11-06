import * as DocumentPicker from 'expo-document-picker';

export const selectFile = async (multiple: boolean) => {
    DocumentPicker.getDocumentAsync({
        multiple: multiple,
        type: [
            "image/*"
        ]
    }).then(res => {
        if (res.canceled) {
            
        }
    })
}