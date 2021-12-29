import React from 'react';
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
// import { Button } from 'native-base';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';



export default function Form(props) {
    const path = 'http://localhost:8080/';
    return (
        <View>
            <Formik initialValues={{ image: '', name: '', description: '', cost: '', active: true, userId: 0 }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Поле обязательно к заполнению!'),
                    name: Yup.string()
                        .required('Поле обязательно к заполнению!'),
                    description: Yup.string()
                        .max(50, 'Must be 50 characters or less')
                        .required('Поле обязательно к заполнению!'),
                    cost: Yup.number()
                        .positive()
                        .required('Поле обязательно к заполнению!')
                        .min(1),
                })}
                onSubmit={(values, action) => {
                    let data = JSON.stringify(values);
                    axios.post(path + 'items/add', data, { headers: { "Content-Type": "application/json" } })
                        .then((response) => {
                            console.log(response)
                        }).catch((err) => {
                            console.log(err)
                        })
                    action.resetForm();
                    // props.navigation.goBack();
                }
                }>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.image}
                            placeholder='Укажите путь к картинке(url)'
                            onChangeText={props.handleChange('image')} />
                        <ErrorMessage name="image">
                            {message => <Text style={styles.error}>{message}</Text>}
                        </ErrorMessage>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Введите название'
                            onChangeText={props.handleChange('name')} />
                        <ErrorMessage name="name">
                            {message => <Text style={styles.error}>{message}</Text>}
                        </ErrorMessage>
                        <TextInput
                            style={styles.input}
                            value={props.values.description}
                            multiline
                            placeholder='Введите описание'
                            onChangeText={props.handleChange('description')} />
                        <ErrorMessage name="description">
                            {message => <Text style={styles.error}>{message}</Text>}
                        </ErrorMessage>
                        <TextInput
                            style={styles.input}
                            value={props.values.cost}
                            placeholder='Введите стоимость'
                            onChangeText={props.handleChange('cost')} />
                        <ErrorMessage name="cost">
                            {message => <Text style={styles.error}>{message}</Text>}
                        </ErrorMessage>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={props.handleSubmit}
                            underlayColor='#000'>
                            <Text style={styles.buttonText}>Добавить</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View >
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    },
    button: {
        width: 150,
        height: 30,
        lineHeight: 30,
        color: "black",
        marginTop: 15,
        borderRadius: 15,
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'gray',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
    },
    buttonText:{
        paddingTop: 5,
        alignSelf: 'center',
        textAlign: 'center',
    },
    error: {
        color: 'red',
        paddingTop: 10,
        alignSelf: 'center',
        textAlign: 'center'
    }
})