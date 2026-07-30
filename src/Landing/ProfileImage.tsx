import avatar from "../assets/avatar.jpg";

function ProfileImage() {
    return (
        <div className="relative flex items-center justify-center p-4">
            <div className="absolute w-72 h-72 md:w-110 md:h-110 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] border border-slate-300/60 rotate-6 transition-transform duration-700 hover:rotate-12" />

            <div className="relative w-72 h-72 md:w-90 md:h-90 overflow-hidden rounded-2xl bg-slate-200 border-2 border-white shadow-xl">
                <img
                    src={avatar}
                    alt="Stiven Gjinaj"
                    className="w-full h-full object-cover transition-all duration-500"
                />
            </div>
        </div>
    );
}

export default ProfileImage;