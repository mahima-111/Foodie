import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Contact=()=>{
    return (
        <div className="flex flex-col items-center w-[100vw]">
            <h1 className="font-bold text-5xl my-8 ">Contact Me!</h1>
            <div className="flex gap-24 font-medium border-2 border-orange-400 p-8 rounded-md">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Hi 👋, I'm Mahima</h2>
                <h3 className="text-xl">Frontend Developer</h3>
                <a className="text-xl text-orange-400" href="https://mahima-portfolio.vercel.app/">My portfolio <LanguageIcon/> </a>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl">Connect with me!</h1>
                <div className="text-orange-400">
                <a className="text-xl" href='https://www.linkedin.com/in/mahima-pandey11/'>Linkedin <LinkedInIcon/> </a>
                <a className="text-xl pl-8" href="https://github.com/mahima-111">GitHub <GitHubIcon/> </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Contact;