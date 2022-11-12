import React from "react";
import { Alert } from 'react-native';

const alertSendForm = ({titleInfo, infoText, btnTextAccept, btnTextDecline, data, resolveAlert, formikActions}) => {

    Alert.alert(
      `${titleInfo}`,
      `${infoText}`, [
          {
            text: `${btnTextAccept}`,
            onPress: () => resolveAlert(data, formikActions)
          },
          {
            text: `${btnTextDecline}`,
            style: 'cancel',
            onPress: () => resolveAlert(false, formikActions)
          }
        ]
    )
}

export default alertSendForm