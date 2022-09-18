import * as Notifications from "expo-notifications"

export async function getPushNotificationToken(){
    const {granted} = await Notifications.getPermissionsAsync();

    if(!granted){
        await Notifications.requestPermissionsAsync();
    }

    if(granted){
        const pushtoken = await Notifications.getExpoPushTokenAsync();

        return pushtoken.data
    }
}