import avatar from "../assets/avatar.jpg";

function ProfileImage() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="relative max-w-95 aspect-4/5 overflow-hidden rounded-2xl bg-slate-200 border-2 border-white shadow-xl">
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