import { Checkbox } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import axios from 'axios';
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Logo } from "../logo";
import { Text } from "../Text";
import { TextInput } from "../TexInput";



export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

 function handleSignIn(event: FormEvent) {
        event.preventDefault()

    
    setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center '>
        <Logo/>
        <Heading size='lg' className='mt-4'>
          Ignite Lab 
        </Heading>
    
        <Text size='lg' className='text-gray-400 mt-1'> 
        Faça Login e comece a usar
        </Text>
        </header>
    
        <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
        {isUserSignedIn && <text>Login realizado!</text>}

          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold'> Endereço de Email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input type='email' id='email' placeholder='Digite seu E-mail'/>
    
            </TextInput.Root>
          </label>
    
        <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold'> Digite sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input type='password' id='password' placeholder='**********'/>
    
            </TextInput.Root>
          </label>
          <label htmlFor='remember' className='flex items-center gap-2 '>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>
    
    
          <Button type='submit' className='mt-4'> Entrar na Plataforma</Button>
          </form>
        <footer className='flex flex-col items-center gap-4 mt-8'>
          
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          
          
          <a href=''className='text-gray-400 underline hover:text-gray-200' >Não possui conta? crie uma agora</a>
          
    
        </footer>
    
       </div>
    )

}