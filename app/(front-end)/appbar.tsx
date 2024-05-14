import React from 'react'
import { auth, signIn, signOut } from 'auth'

async function Appbar() {

    const session = await auth();


    return (
        <div>
            Appbar

            <div>
                {session && session.user ? (<div>
                    <p>{session.user.name}</p>
                    <form action={async() => {
                        'use server'
                        await signOut()
                    }}>
                        <button type='submit'>Sign Out</button>
                    </form>
                    </div>):(
                        <form action={async() => {
                            'use server'
                            await signIn()
                        }}>
                            <button type='submit'>Sign In</button>
                        </form>
                    ) }
            </div>

        </div>
    )
}

export default Appbar