import { Meta, StoryObj} from '@storybook/react';
import { within, userEvent, waitFor} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from './Signin';


export default {
    title: 'Pages/Signin',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
      msw: {
        handlers: [
            rest.post('/sessions', (req, res ) => {
                return res()
            })
        ],
      },
    }

} as Meta 

export const Default: StoryObj = {
    play: async ( { canvasElement }) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('Digite seu E-mail'), 'diego@rocketseat.com.br')
        userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')
        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
        } )
    }
}