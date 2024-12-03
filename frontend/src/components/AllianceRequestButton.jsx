import React from "react"
import { requestAlliance, withdrawAllianceRequest } from "../services/alliances"
import { useState } from "react"


const AllianceRequestButton = (props) => {
    const { _id } = props
    const [requested, request] = useState(false)

    const sendRequest = async () => {
        if(!requested) {
            request(true)
            try {
                const token = localStorage.getItem("token");
                if(!token) {
                    throw new Error("No token found.")
                }
                const response = await requestAlliance(token, _id)
                console.log("Alliance requested", response);

            } catch (error) {
                console.log("Error requesting alliance")
            }
        }
        else {
            try {
                request(false) 
                const token = localStorage.getItem("token")
                if(!token) {
                    throw new Error("No token found.")
                }
                const response = await withdrawAllianceRequest(token, _id)
                console.log("Alliance request withdrawn", response);
                
            } catch (error) {
                console.log("Error withdrawing alliance request")
            }
        }

    }
    
    return (
        <div>
        {!requested && <button onClick={sendRequest}>Request Alliance!</button>}
        {requested && <button onClick={sendRequest}>Withdraw alliance request...</button>}
        {requested && <p>Alliance Requested</p>}
        </div>
    );
};

export default AllianceRequestButton