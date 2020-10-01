import queryString from 'query-string'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import agent from '../../app/api/agent';

const RegisterSuccess: React.FC<RouteComponentProps> = ({location}) => {

    const {email} = queryString.parse(location.search);
    
    const handleConfirmEmailResend = () => {
        agent.User.resendVerifyEmailConfirm(email as string).then(() => {
            toast.success('Verification email resent - please check your email');
        }).catch((error) => console.log(error));
    }

    return (
        <Segment>
            <Header icon>
                <Icon name='check' />
            </Header>

            <Segment.Inline>
                <div className="center">
                    <p>Please check your email (including junk folder) for the verification email</p>
                    {email && 
                        <>
                        <p>Did not get the email? click below button to resend</p>
                        <Button onClick={handleConfirmEmailResend} primary content="Resend email" size='huge'/>
                        </>
                    }
                </div>
            </Segment.Inline>
        </Segment>
    )
}

export default RegisterSuccess;