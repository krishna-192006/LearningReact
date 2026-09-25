import ImageContainer from './ImageContain'
import Top from './Top'

const Section2 = () => {
        const users = [
    {  
        img: "/premium_photo-1722945664195-a6fd149bc472.jpg",
        title: "Everyday Banking"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMGVtcGxveWVlc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Business Banking"
    },
    {
        img: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlJTIwZW1wbG95ZWVzfGVufDB8fDB8fHww",
        title: "Investment Planning"
    },
    {
        img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ycG9yYXRlJTIwZW1wbG95ZWVzfGVufDB8fDB8fHww",
        title: "Digital Payments"
    },
    {
        img : "https://images.unsplash.com/photo-1649766509827-5edf356e3fbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "UPI Payments"
    }
]
  return (
    <div className='h-screen w-full bg-blue-300'>
        <div>
            <Top/>
             <div className='flex gap-6 overflow-x-auto px-6 mt-10'>
            {users.map((elem,idx) => 
            <ImageContainer
            key={idx}
            img={elem.img}
            title={elem.title}/>
            )}
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Section2