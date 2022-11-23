import "./Refer.css";

function Refer (){
    return(
      
        <div className="w-100 p-2 card">
            <h2>Love Xpayroll?</h2>
            <h6>Help us spread the word!</h6>
            <p>Get 3 months free payroll execution for every successful referral.</p>
            <p>Your referred friend also gets 3 months free payroll excution.</p>

            <h4>Invite by sharing the link</h4>

           
    
    
      <div className=" shadow border w-75 p-3 d-flex">
       
        <div className="text-primary">
        https://payroll.razorpay.com/signup?r=u-351026&name=Trinits+Technologies
        </div>


      </div>
      
     
     
      <div>Share the link on:
        <span className="text-primary">Link </span>
        <span className=" ">|</span>
        <span className="text-primary">Twitter</span>
        <span className="">|</span>
        <span className="text-primary">Facebook</span>
      </div>
      <h4>Or Invite by sharing their details with us(this usually works better)</h4>
      <div className="w-50 m-2 p-2">
        <b>Name</b>
        <input type="Name"className="form-control" placeholder="Name"/>
      </div>
      <div className="w-50 m-2 p-2">

        <b>Email Address</b>
        <input type="Email Address"className="form-control" placeholder="Email Address"/>
      </div>
      <div className="w-50 m-2 p-2">
        <b>Phone Number</b>
        <input type="Phone Number"className="form-control" placeholder="Phone Number"/>
      </div>
      <div>
        <button className="bg-primary m-2 p-2">SEND INVITATION</button>
      </div>
      <div className="w-75 p-4 shadow border">
       To qualify, your referrer must sign up for Xpayroll and excute at least one paid payroll.
      </div>
    </div> 
  
           
        
           
    )
}
export default Refer;