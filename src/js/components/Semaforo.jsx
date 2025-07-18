import { useState } from "react";

export const Semaforo = () => {
	const [color, setColor] = useState("")

	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="bg-black" style={{ height: "100px", width: "30px" }}></div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="bg-black d-flex flex-column rounded-3">
					<button className={`btn btn-danger rounded-circle mt-3 mx-3 ${color==="rojo" ? "btn-glow" : ""}`} style={{ height: "100px", width: "100px" }} onClick={() => {
						setColor("rojo")
					}}></button>
					<button className={`btn btn-warning rounded-circle mx-3 ${color==="amarillo" ? "btn-glow" : ""}`} style={{ height: "100px", width: "100px" }} onClick={() => {
						setColor("amarillo")
					}}></button>
					<button className={`btn btn-success rounded-circle mb-3 mx-3 ${color==="verde" ? "btn-glow" : ""}`} style={{ height: "100px", width: "100px" }} onClick={() => {
						setColor("verde")
					}}></button>
				</div>
			</div>
		</>
	);
};