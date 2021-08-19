import Card from './Card';

function Header(){
  const  array1=[
      {
            Title:"Iphone7",
            Sub:"Apple",
            Desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007",
            image:"https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-2.jpg?quality=70&strip=all&w=720&h=405&crop=1https://www.zdnet.com/a/hub/i/r/2021/05/18/cc3b6d65-bf0a-4dda-9fba-56d5d2300db5/resize/1200xauto/28743d45e30a5e7ad851763d8913ed7d/apple-iphone-11-review-cnet.jpg"
      },
      {
        Title:"Iphone8",
        Sub:"Apple",
        Desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007",
        image:"https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-2.jpg?quality=70&strip=all&w=720&h=405&crop=1https://www.zdnet.com/a/hub/i/r/2021/05/18/cc3b6d65-bf0a-4dda-9fba-56d5d2300db5/resize/1200xauto/28743d45e30a5e7ad851763d8913ed7d/apple-iphone-11-review-cnet.jpg"
        },
        {
            Title:"Iphone10",
            Sub:"Apple",
            Desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007",
            image:"https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-2.jpg?quality=70&strip=all&w=720&h=405&crop=1https://www.zdnet.com/a/hub/i/r/2021/05/18/cc3b6d65-bf0a-4dda-9fba-56d5d2300db5/resize/1200xauto/28743d45e30a5e7ad851763d8913ed7d/apple-iphone-11-review-cnet.jpg"
         },
         {
            Title:"Iphone11",
            Sub:"Apple",
            Desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007",
            image:"https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-2.jpg?quality=70&strip=all&w=720&h=405&crop=1https://www.zdnet.com/a/hub/i/r/2021/05/18/cc3b6d65-bf0a-4dda-9fba-56d5d2300db5/resize/1200xauto/28743d45e30a5e7ad851763d8913ed7d/apple-iphone-11-review-cnet.jpg"
         },
         {
            Title:"Iphone12",
            Sub:"Apple",
            Desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007",
            image:"https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-2.jpg?quality=70&strip=all&w=720&h=405&crop=1https://www.zdnet.com/a/hub/i/r/2021/05/18/cc3b6d65-bf0a-4dda-9fba-56d5d2300db5/resize/1200xauto/28743d45e30a5e7ad851763d8913ed7d/apple-iphone-11-review-cnet.jpg"
         },
  ]
    return (
        
        <div className="main">
        {
                array1.map((project,index)=>(
                    <Card Title={project.Title} Sub={project.Sub} Desc={project.Desc} image={project.image}/>

                ))
        }
        </div>
        

        
    )

}


export default Header;