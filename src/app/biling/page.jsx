import React from "react";
import Image from "next/image";

const Data =[
  {
text1:'March, 01, 2020',
text2:'#MS-415646',
number:'$180',
svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>)



},
  {
text1:'February, 10, 2021',
text2:'#RV-126749',
number:'$250',
svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>)



},
  {
text1:'April, 05, 2020',
text2:'#FB-212562',
number:'$560',
svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>)



},
  {
text1:'June, 25, 2019',
text2:'#QW-103578',
number:'$120',
svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>)



},
  {
text1:'March, 01, 2019',
text2:'#AR-803481',
number:'$300',
svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>)



},



]


const Users = [
  {
      name : 'Oliver Liam',
      company : 'Viking Burrito',
      email : '[email protected]',
      number : 'FRB1235476',
      delete : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>),
      edite : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>)
  },
  {
      name : 'Lucas Harper',
      company : 'Stone Tech Zone',
      email : '[email protected]',
      number : 'FRB1235476',
      delete : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>),
      edite : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>)
  },
  {
      name : 'Ethan James',
      company : 'Stone Tech Zone',
      email : '[email protected]',
      number : 'FRB1235476',
      delete : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>),
      edite : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>)
  }


]


const Apps = [
  {
      name : 'Netflix',
      at : '27 March 2020, at 12:30 PM',
      price : '- $ 2,500',
      number : 'FRB1235476',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
      name : 'Apple',
      at : '27 March 2020, at 04:30 AM',
      price : '+ $ 2,000',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
      name : 'Stripe',
      at : '26 March 2020, at 13:45 PM',
      price : '+ $ 750',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
      name : 'HubSpot',
      at : '26 March 2020, at 12:30 PM',
      price : '+ $ 1,000',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
      name : 'Creative Tim',
      at : '26 March 2020, at 08:30 AM',
      price : '+ $ 2,500',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
      name : 'Webflow',
      at : '26 March 2020, at 05:00 AM',
      price : 'Pending',
      icon : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>)
  }


]

function Biling() {
  return (
    <main className="w-[100%]  lg:ps-[270px] flex flex-col  mb-[100px] lg:mb-[50px] bg-test-24">
      <div className="w-[99%] mx-auto   flex flex-wrap   justify-evenly rounded-2xl  my-1 py-1">
        <div className="w-[100%] lg:w-[59.5%]  h-full   rounded-2xl p-1 flex justify-evenly flex-wrap">
          <div
            className="h-[200px] w-[99%] mx-auto lg:w-[58%] border-2  rounded-2xl my-1 p-2 bg-white "
            style={{
              backgroundImage: `url(${"23.jpg"})`,
            }}
          >
            <div className="w-[100%] h-[33.33%] flex justify-start items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

            </div>
            <div className="w-[100%] h-[33.33%] text-white flex items-center justify-start b">
              <span className="w-[10%] text-center">4562 </span>
              <span className="w-[10%] text-center">1122 </span>
              <span className="w-[10%] text-center">4594 </span>
              <span className="w-[10%] text-center">7852</span>
            </div>
            <div className="w-[100%] h-[33.33%]  flex">

              <div className="w-[50%] justify-start flex items-center text-test-13 text-center">
<div className="w-[30%] flex flex-col  h-full">
  <span>Card Holder</span>
  <span>Jack Peterson</span>
</div>
<div className="w-[30%] flex flex-col  h-full">
  <span>Expires</span>
  <span>11/22</span>
</div>
              </div>
              <div className="w-[50%] justify-end flex items-center ">
                <Image src='/24.png' width={70} height={70}/>
              </div>
            </div>
          
          </div>
          <div className="    h-[200px] w-[100%] md:w-[49%] mx-auto lg:w-[19%] border-2  rounded-2xl my-1 p-2 flex-col justify-evenly items-center bg-white">

        <div className="w-[18%] lg:w-[35%] h-[32%] border rounded-2xl mx-auto flex  justify-center items-center text-white bg-test-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


        </div>
        <div className="w-[100%] h-[42%]  flex flex-col  justify-center items-center my-1 ">


     <h2 className="text-[20px] text-test-9">Salary</h2>
       <p className=" text-test-11">Belong Interactive</p>

        </div>
        <div className="w-[100%] h-[23%]">
<strong className="text-[25px] text-test-9  flex justify-center items-center ">
+$2000
</strong>

        </div>
          </div>
          <div className="h-[200px] w-[100%] md:w-[49%] mx-auto lg:w-[19%] border-2  rounded-2xl my-1 p-2 bg-white">
          <div className="lg:w-[35%]  w-[18%] h-[32%] border rounded-2xl mx-auto flex  justify-center items-center text-white bg-test-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

        </div>
        <div className="w-[100%] h-[42%]  flex flex-col  justify-center items-center my-1">


     <h2 className="text-[20px] text-test-9">Paypal</h2>
       <p className=" text-test-11">Freelance Payment</p>

        </div>
        <div className="w-[100%] h-[23%]">
<strong className="text-[25px] text-test-9  flex justify-center items-center ">
$455.00
</strong>
        </div>
          </div>




          <div className="w-[99%] border h-[250px] lg:h-[200px] rounded-2xl my-1 p-2 bg-white">


<div className="w-[100%] h-1/4 rounded-2xl flex justify-between items-center ">
  <h2 className="text-test-9">Payment Method</h2>

<button className="h-[40px] w-[160px] flex bg-black text-white rounded-lg  items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add New Card
</button>
</div>





<div className="w-[100%] h-3/4 rounded-2xl  flex justify-between items-center flex-wrap">


  <div className="w-[99%] mx-auto lg:w-[49.5%] border h-[50%]  rounded-2xl flex justify-between items-center my-1">
<div className="w-[90%] flex  justify-between items-center ">
<div className="w-[20%] h-full  flex  justify-center items-center   ">
  <Image src='/24.png' width={30} height={30} /> 
</div>
 <div className="w-[80%] h-full  flex  justify-start items-center">
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" >7852</span>
 </div>
</div>
<div className="w-[10%] flex justify-center   ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

</div>



  </div>
  <div className=" w-[99%] mx-auto lg:w-[49.5%] border h-[50%]  rounded-2xl flex justify-between items-center ">


  <div className="w-[90%] flex  justify-between items-center ">
<div className="w-[20%] h-full  flex  justify-center items-center   ">
  <Image src='/25.png' width={30} height={30} /> 
</div>
 <div className="w-[80%] h-full  flex  justify-start items-center">
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" >****</span>
  <span  className="w-[20%] flex justify-center items-center" > 5248</span>
 </div>
</div>
<div className="w-[10%] flex justify-center   ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

</div>

    
  </div>
</div>




            
          </div>





        </div>

        <div className="w-[100%] lg:w-[39.5%]  border  rounded-2xl h-[425px] flex flex-wrap flex-col p-2 bg-white">


     <div className="w-[100%] h-[10%]   flex justify-between items-center">
  <h1 className="text-test-9 ">Invoices</h1>


  <button className="border border-test-1 w-[130px] h-[40px] text-test-1 rounded-2xl">ViewAll</button>
    </div>



           <div className="w-[100%] h-[90%]   flex  ">
<ul className="h-full w-[100%]   rounded-2xl p-2">

{
  Data.map((val , i)=>{
    return(

  <li key={i} className="flex justify-between items-center  h-[20%]">
  <div className="w-[50%]  h-full flex flex-col  justify-center text-[12px]  lg:text-[18px]">
    <span className="text-[20px] text-test-6">{val.text1}</span>
    <span className="text-test-11">{val.text2}</span>
  </div>
  <div className="w-[50%]  h-full justify-end flex ">
  <div className="w-[50%]  justify-between items-center text-test-6 hidden lg:flex">
    <span>{val.number}</span>
    <span className="flex mx-2  ">
      {val.svg}
  PDF
  </span>
  
            </div>
           </div>
         </li>
    )
  })
}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[99%] mx-auto   flex flex-wrap rounded-2xl h-[700px] my-1  p-2">

        <div className="w-[100%] lg:w-[59.5%] mx-auto border bg-white rounded-2xl mb-1 p-2">
        <div className="w-[100%] h-[10%]   flex justify-between items-center">
          <h1 className="text-test-9">Billing Information</h1>
        </div>

<div className="w-[100%] h-[90%] flex  flex-col justify-evenly my-1">


<ul className="h-full w-[100%] p-2  flex flex-wrap">



{
  Users.map((val, i)=>{
   return(
    <li key={i} className=" w-[100%] flex justify-between items-center  h-[32%] bg-test-24 rounded-2xl flex-wrap p-2 ">
    <div className="w-[100%] h-[20%] flex justify-between items-center ">
      <div className="w-[50%]">
        <h2 className="text-[20px] text-test-9 ">{val.name}</h2>
      </div>
      <div className=" hidden lg:flex w-[50%]  justify-end">
        <span className="flex w-[30%] text-rose-600">{val.delete} Delete</span>
        <span className="flex w-[30%]  text-green-600">{val.edite}Edite</span>
      </div>
    </div>
    
    <div className="w-[100%] h-[80%] my-3 flex flex-col text-[12px]  lg:text-[18px]">
    
    
    <span className="w-[100%] h-[23.33%]  flex justify-start items-center text-test-11  ">Company Name: <span className=" text-test-9">{val.company}</span></span>
    <span className="w-[100%] h-[23.33%]  flex justify-start items-center text-test-11">Email Address: <span className=" text-test-9">{val.email}</span></span>
    <span className="w-[100%] h-[23.33%]  flex justify-start items-center text-test-11">AT Number: <span className=" text-test-9">{val.number}</span></span>
    
    
    
    </div>
      </li>
   )
  })
}

 
</ul>
</div>
        </div>
        <div className="w-[100%] lg:w-[39.5%] mx-auto border bg-white rounded-2xl p-2">
        <div className="w-[100%] h-[10%]   flex justify-between items-center">
          <h1 className="text-test-9">Your Transactions</h1>

<p className="text-test-11 flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

23 - 30 March 2020</p>

        </div>

<div className="w-[100%] h-[90%] flex  flex-col justify-evenly my-1">




  <ul className="h-full w-[100%] p-2  flex flex-wrap">

{
Apps.map((val , i)=>{
  return(

<li key={i} className="w-[100%] flex justify-between items-center  h-[16.66%]  rounded-2xl flex-wrap p-2">

<div className="w-[100%] flex  justify-between items-center h-full">

<div className="flex w-[70%]   h-full justify-start items-center">
<span className="w-[50px] h-[50px]   flex items-center justify-center">
 <span className={
  val.name === 'Netflix'
  ?'text-rose-600':
  val.name ==='Webflow'
  ?'text-gray-600':
  'text-green-600'
 }>
 {val.icon}
 </span>
</span>
<span className="flex  flex-col">
  <span className="text-rest-9">{val.name}</span>
  <span className="text-test-11">{val.at}</span>
</span>




</div>
<div className="flex w-[30%]   h-full justify-end items-center">
<span className={
   val.name === 'Netflix'
   ?'text-rose-600':
   val.name ==='Webflow'
   ?'text-gray-600':
   'text-green-600'



  


}>{val.price}</span>
</div>



</div>


</li>
  )
})


}





  </ul>
</div>







       

        </div>








        </div>
    </main>
  );
}

export default Biling;
