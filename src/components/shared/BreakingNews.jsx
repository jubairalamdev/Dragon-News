import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex justify-between container p-3 mx-auto gap-2 items-center bg-gray-100  rounded-lg">
            <button className="btn bg-[#D72050] text-white rounded-lg">
                LATEST
            </button>
            <Marquee pauseOnHover={true} speed="40" className="font-semibold text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores molestias cupiditate? Reiciendis, libero similique, nostrum in eius autem rerum facilis perferendis odio asperiores illo maxime minima. Illo tenetur laborum doloremque minima, eos facere! Doloribus rerum voluptate quibusdam exercitationem dignissimos reiciendis impedit veritatis ipsum sint asperiores qui voluptatibus fuga dolores, eos, officia debitis libero, architecto temporibus molestiae illum sed laborum maxime! Fugiat ullam ipsum placeat dicta quasi odio omnis obcaecati, iste facilis incidunt eaque ipsam aliquam illum ipsa expedita totam nisi aperiam pariatur excepturi architecto? Soluta pariatur harum nihil, omnis dolorem aliquid cum officiis natus culpa libero accusantium eum in ratione voluptates earum inventore nostrum quidem recusandae maxime molestias illo? Magni, aperiam quod fugit beatae, vel facilis odio, non molestiae exercitationem tempora possimus. Quos cupiditate vero magnam, sunt quidem dolor blanditiis voluptatum a est quod aspernatur itaque amet reprehenderit ducimus eum nam, impedit dignissimos. Neque quia eum veritatis amet soluta aspernatur a ut facere ipsa rem aliquid delectus possimus ad, voluptas praesentium magnam vel, quis numquam expedita perferendis blanditiis? Aspernatur blanditiis quis animi maiores iusto dolorem, hic rerum nulla soluta commodi molestiae explicabo numquam eveniet ex deserunt necessitatibus id similique libero at earum recusandae ipsam totam ut repellat? Nostrum, eos.
            </Marquee>
        </div>
    );
};

export default BreakingNews;