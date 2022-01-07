import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <Inputdata />
    </div>
  );
}

function Header() {

  const [studentname, change] = useState("-By (Mayuresh_Nikam_jh )(210940520041)");
  const [appname, change1] = useState("ChatApp");

  return (
    <div className="container-fluid">
      <div className="row bg-secondary align-items-center">

        <div className=" fs-1 fw-bolder col-3 text-light">
          {appname}
        </div>

        <div className="col text-light fw-bold">
          {studentname}
        </div>

      </div>
    </div>
  );
}


function Inputdata() {
  const [msg, changemsg] = useState("");

  const checkmsg = (e) => {
    const newmsg = e.target.value
    changemsg(newmsg);

  }

  const [list, setmsg] = useState([""]);

  const sendmsg = () => {
    const newdata = msg;
    const btnmsg = [newdata, ...list]
    setmsg(list)
    changemsg("");
  }



  return (
    <div>
      <div className="container-fluid row justify-content-center ">
        <div className="col-8">

          <input className="w-100 mt-5 h-50 fs-5"
            type="text"
            name="" id=""
            value={msg}
            onChange={checkmsg}
            placeholder="Let's chat here... "
          />
        </div>

        <div className="col ">
          <input className=" ms-2 mt-5 w-50 btn btn-outline-primary fs-4" type="button" value="SEND" onClick={sendmsg} />
        </div>

      </div>


      <div>
        {list.map(() => (
          <div>{msg}</div>
        ))}
      </div>

     <div className="row" >
      <div className=" row ms-1  alert-secondary mt-2 fs-2">hi</div>
      <div className="row me-1  justify-content-end alert-secondary mt-2 fs-2">hello</div>
      <div className="row ms-1  alert-secondary mt-2 fs-2">whats up</div>
      <div className="row me-1 justify-content-end alert-secondary mt-2 fs-2">all good</div>
      <div className="row ms-1  alert-secondary mt-2 fs-2">All the best</div>
     </div>


    </div>
  );

}
