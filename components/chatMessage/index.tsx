import { Text, View } from '../Themed';

import React from 'react';
import Styles from './style';
import { chatMessageProps } from '../../types';
import moment from 'moment';
import tw from 'twrnc'

// import { Text, View } from 'react-native';







const ChatMessage = (props: chatMessageProps) => {
    const {message} = props;
    
    // Check for incoming and outgoing messages
    const isMyMessage = () => message.user.id === "u1";
    
    return (
        <View style = {[Styles.container]}>
            <View style = {[
                Styles.msgBox,
                isMyMessage()? Styles.outgoingMsg: Styles.incomingMsg
            ]}>
                {!isMyMessage() && (<Text style = {tw`text-[#25D366] font-semibold text-sm mb-2`}>{message.user.name}</Text>)}
                <Text style = {tw`text-[1rem] -m-1`}>{message.content}</Text>
                <Text style = {tw`text-[0.9rem] -p-1 absolute right-0 bottom-0 pt-2 mr-2 mb-1 text-gray-400`}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;