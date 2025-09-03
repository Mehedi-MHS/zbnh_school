

const AboutSection1 = ()=>{

    
return(
    <div className="container w-full mx-auto mt-3  px-1 pb-10 grid grid-cols-1 md:grid-cols-12 gap-2">
    <div className="schoolInfo w-full bg-white/50 rounded-xl p-7 md:col-span-8 md:row-span-2 gap-2 shadow-sm">
        <img src="/images/banner2.png" alt="" className="w-full fade-up"/>
        <span className="text-xl md:text-2xl text-gray-700 text-justify fade-up">
<br /><b>Former Name:</b> Jamidarhat B.N. High School <br /><b>Present Name:</b> Jamidarhat Begum Nurunnahar High School <br />
EIIN: 107210 <br />Established: 1964 <br />Location: Begumganj Upazila, Noakhali, Bangladesh
<br /><span className="font-bold text-2xl text-center text-slate-500">Introduction</span> <br />
Founded in 1964, Jamidarhat Begum Nurunnahar High School has been playing a vital role in spreading the light of education in the region. Today, it stands as a well-recognized educational institution under Begumganj Upazila. Over the decades, the school has nurtured countless talented and responsible citizens who have been serving with excellence both at the national and international levels.
<br /><span className="font-bold text-2xl text-center text-slate-500">Academic & Co-Curricular Activities</span> <br />
Along with regular academic programs, the school organizes various co-curricular activities such as debate competitions, sports, cultural programs, and other creative events. These activities help foster students’ confidence, moral values, and leadership skills.
<br /><span className="font-bold text-2xl text-center text-slate-500">Contribution to Society</span> <br />
Many of the school’s alumni hold prestigious positions in government and private sectors, which reflects the institution’s reputation, pride, and contribution to the nation.
<br /><span className="font-bold text-2xl text-center text-slate-500">Mission & Vision</span> <br />

Jamidarhat Begum Nurunnahar High School is committed to providing quality education that develops knowledge, character, and humanitarian values in its students, thereby preparing them to contribute meaningfully to society and national development.</span>
    </div>
    

    <div className="teachersContainer md:col-span-4">
        
        <div className="headmaster w-full rounded-xl bg-white shadow-sm p-3 ">
           <div className="w-full bg-green-100 text-slate-500 text-center font-bold text-2xl p-3 mb-3"> Message of the Headmaster</div>
           <img src="/images/headmaster.jpg" alt="" className="w-50 fade-up rounded-lg shadow-sm mx-auto" />
<div className="title text-blue-700 text-xl text-center">Mohammad Ismail Chowdhury</div>
<p className="text-blue-500 text-sm text-center">Head Teacher</p>
<div className="description text-justify text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nobis hic dolor, sequi odit, laboriosam illo consectetur atque minima ullam nesciunt illum voluptates quas perferendis excepturi quo odio nemo recusandae.</div>
        </div>
    
    
    <div className="headmaster w-full rounded-xl bg-white shadow-sm p-3 mt-1 ">
           <div className="w-full bg-blue-100 text-slate-500 text-center font-bold text-2xl p-3 mb-3"> Message of Assistant Headmaster</div>
           <img src="/images/assistant.jpg" alt="" className="w-50 fade-up rounded-lg shadow-sm mx-auto" />
<div className="title text-blue-700 text-xl text-center">Rahmat Ullah Sujon</div>
<p className="text-blue-500 text-sm text-center"> Assistant Head Teacher</p>
<div className="description text-justify text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nobis hic dolor, sequi odit, laboriosam illo consectetur atque minima ullam nesciunt illum voluptates quas perferendis excepturi quo odio nemo recusandae.</div>
        </div>
    
    <img src="/images/helpline.png" alt="National helpline number bd" className="w-full mx-auto my-2" />
    </div>

   
</div>
)
}
export default AboutSection1;