import type { FC } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'

const Agents: FC = () => {

  const [agents, setAgents] = useState<IAgent[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, []);

  return (
    <>
      <div className="filter">
        <label htmlFor='lastName'>Practise Area Filter:</label>
        <input
          type='text'
          name='lastName'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          required
        />
      </div>
      <div className="agents">
        {agents
          .filter(agent => agent.practiceAreas.includes(filter))
          .map((agent) => (
            <Agent key={agent.id} agent={agent} expanded={false} />
          ))}
        <Link to={'/add-agent'}>
          <button className="btn">Join the team!</button>
        </Link>
      </div>

      <div className="btn-container">
      </div>
    </>
  );
};

export default Agents;
