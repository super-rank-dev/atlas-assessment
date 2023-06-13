import type { FC } from "react";
import { useState } from "react";
import axios from "axios";
import Noty from "noty";
import 'noty/lib/noty.css';
import { IAgent } from "../../types/Agent";
import './AddAgent.css';

const AddAgentPage: FC = () => {

    const [agent, setAgent] = useState<IAgent>({
        id: '',
        firstName: '',
        lastName: '',
        photoUrl: '',
        agentLicence: '',
        address: '',
        practiceAreas: '',
        aboutMe: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("/agents", agent);
            new Noty({
                type: 'success',
                text: 'Agent Saved!'
            }).show();
            window.location.href = '/';
        } catch (error) {
            new Noty({
                type: 'warning',
                text: error + ''
            }).show();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAgent((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <h1>Add Agent</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        type='text'
                        name='firstName'
                        value={agent.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        type='text'
                        name='lastName'
                        value={agent.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='photoUrl'>Photo URL:</label>
                    <input
                        type='text'
                        name='photoUrl'
                        value={agent.photoUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='agentLicence'>Licence Number:</label>
                    <input
                        type='text'
                        name='agentLicence'
                        value={agent.agentLicence}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        name='address'
                        value={agent.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='practiceAreas'>Practice Areas:</label>
                    <input
                        type='text'
                        name='practiceAreas'
                        value={agent.practiceAreas}
                        onChange={handleChange}
                        required
                    />
                    <small>Separate areas with commas (,)</small>
                </div>
                <div>
                    <label htmlFor='aboutMe'>About Me:</label>
                    <textarea
                        name='aboutMe'
                        value={agent.aboutMe}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddAgentPage;
