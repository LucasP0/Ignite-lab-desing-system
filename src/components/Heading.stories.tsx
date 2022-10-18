import { Meta, StoryObj} from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

// configuração global
export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
    children: 'Lorem ipsum',
    size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            controle: {
                type: 'inline-radio'
            },

        }
    }

} as Meta <HeadingProps>
    //variações
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args:{children: 'PEQUENO',
        size:'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args:{children: 'GRANDE',
        size:'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
       asChild: true,
       children: (
        <h1>Teste</h1>
       )
    },
   argTypes: {
    children:{
        table: {
            disable: true,
        }
    },
    asChild: {
        table:{disable: true,},
        
    }
}
}
