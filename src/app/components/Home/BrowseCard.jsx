const BrowseCard = () => {
  return (
    <div className="layout-container">
      <div className=" bg-[#F0F0F0] rounded-4xl p-14">
        <h2 className="text-[48px] font-bold uppercase text-center mb-7">
          Browse by dress style
        </h2>
        <div className="">
          <div className="grid grid-cols-12 gap-6">
            <div className="browse_card col-start-1 col-end-6">
              <h3>Casual</h3>
              <img src="/images/casual_card.png" alt="casual" />
            </div>
            <div className="browse_card  col-start-6 col-end-13">
              <h3>Formal</h3>
              <img src="/images/formal_card.png" alt="casual" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="browse_card col-start-1 col-end-7">
              <h3>Party</h3>
              <img src="/images/party_card.png" alt="casual" />
            </div>
            <div className="browse_card col-start-7 col-end-13">
              <h3>Gym</h3>
              <img src="/images/gym_card.png" alt="casual" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
