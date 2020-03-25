import React from 'react';
import { Tag } from '../Tag';
import { TagColors } from '../../model/tag-color';

interface DeliveryTagProps {
    deliveryOptions: string[];
}

const deliveryColorMap = new Map<string, TagColors>([
    ['grubhub', {backColor: '#ef333e', foreColor: '#fff'}],
    ['ubereats', {backColor: '#142127', foreColor: '#08bb68'}],
    ['doordash', {backColor: '#f6f6f6', foreColor: '#f82f08'}],
    ['postmates', {backColor: '#f8f8f8', foreColor: '#000'}],
    ['instacart', {backColor: '#f87e00', foreColor: '#fff'}],
    ['eat24', {backColor: '#b92c19', foreColor: '#fff'}],
]);

export const DeliveryTag: React.FC<DeliveryTagProps> = (props) => {
    
    return (
        <>
            { props.deliveryOptions.map((deliveryOption, index) => {
                const deliveryOptionKey = deliveryOption.toLowerCase();
                const tagColor = deliveryColorMap.get(deliveryOptionKey);
                
                return (
                    <Tag key={index} text={deliveryOption} tagColor={tagColor} />
                )
            }) }
        </>
    )
}