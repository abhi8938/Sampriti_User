/*TODO:
*   1.Copy screen from template(DONE)
*   2.Modify according to typescript(DONE)
*   3.Add/remove features to complete the screen
*   4.Create Skeleton
*   5.Notifications - virtualized notification list
*       - send notificaiton
*       - order created
*       - or order placed from server
*       - navigate to notification screen
 */

import React, {FunctionComponent, useEffect, useState} from 'react';
import {FlatList, View} from "react-native";
// @ts-ignore
import {Button, Block, NavBar, Text, theme} from 'galio-framework';

type Props = { data?: any, navigation?: any, route?: any, isLoading?: boolean };

const Notification: FunctionComponent<Props> = ({data = [], navigation, route, isLoading}) => {
    const [list, setList] = useState(data)
    const [load, setLoad] = useState(data)

    const renderNotifications = ({item}: any) => {
        return <Text>{item.title}</Text>
    }
    const getData = () => {
        setLoad(true)
        //get notifications
        setLoad(false)
    }
    useEffect(() => {
        getData()
        return () => {
            console.log('unmounted')
        }
    }, [])
    return <Block style={{marginTop: theme.SIZES.BASE}}>
        <FlatList
            // ref={ScrollRef}
            style={{marginBottom: theme.SIZES.BASE * 4}}
            // onScroll={handleScroll}
            data={list}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item, index) => `${index}-${item.id}`}
            renderItem={({item}) => renderNotifications({item})}
            numColumns={2}
            ListEmptyComponent={<Text bold style={{
                marginHorizontal: theme.SIZES.BASE,
                marginVertical: theme.SIZES.BASE,
                alignSelf: 'center'
            }} size={theme.SIZES.BASE * 1.5}>No Notifications</Text>}/>
    </Block>;
};

export default Notification;
