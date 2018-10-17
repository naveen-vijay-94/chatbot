import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input, data

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me')
                        data = input.value
                        input.value = ''
                        fetch("https://o1mqnq9mj1.execute-api.us-east-1.amazonaws.com/beta/chatbot", {
                            method: "POST",
                            headers: {
                                'Content-Type' : 'application/json'
                                //"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
                            },
                            body: JSON.stringify(data)
                        })
                            .then(function (response) {
                                return response.json()
                            })
                            .then(function (data) {
                                console.log(data);
                                props.dispatch(data['body'], 'ChatBot')
                            });
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
                
            />
        </section>
    )
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage