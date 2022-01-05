import { StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
    onChange: (text: string) => void,
    placeholder: string
}

const Input = ({ onChange, placeholder }: Props) => {
    return (
        <TextInput 
            placeholder={placeholder}
            onChangeText={onChange}
            keyboardType='number-pad'
            style={styles.textInput}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    textInput: {
        width: 350
    }
})
