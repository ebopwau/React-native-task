import React, {useState, useEffect} from 'react';
import { FlatList, View, Button } from 'react-native';
import {ImageUnsplash} from './ImageUnsplash';

const Gallery = props => {
    // Server response state
    const [state, setState] = useState({data: []});

    // Allows to update the state if true
    const [shouldUpdate, setUpdate] = useState(true);

    const handler = async (api) => {
        await setUpdate(false)
        let response = await fetch(api)
        if (response.ok) {
            let json = await response.json()
                .then(data => {
                    const localHandler = (data) => {
                        // console.log(data)
                        let arr = [...state.data];
                        arr.push(...data)
                        setState({
                            data: arr
                        })
                        
                    }
                    localHandler(data)
            })
        }
    }

   const getData = () => {
        const key = 'WzTK-7FrwXOHsthKJ_25hsjzeY3RyL-AMhJcrJoTd4k';
        const api = `https://api.unsplash.com/photos/random/?client_id=${key}&count=12`;
        handler(api);
        // console.log('getting data');
    }

    useEffect(()=>{
        shouldUpdate 
        ? getData()
        : null
    })

   const renderImg = ({ item }) => {
            return (
                <ImageUnsplash 
                    src={item.urls.thumb} 
                    srcFull={item.urls.full}
                    name={item.user.name} 
                    width={item.width}
                    height={item.height}
                />
            )
    }

    return (
        <View>
            <FlatList 
                keyExtractor= {item => item.id}
                data= {state.data}
                renderItem= {renderImg}
                contentContainerStyle= {{
                    flexGrow: 1,
                    width: '100%'
                }}
                numColumns= {3}
            />
            
            <Button 
                title="Load More"
                onPress={() => setUpdate(true)}
            />
        </View>
    )
    
}

export default Gallery
