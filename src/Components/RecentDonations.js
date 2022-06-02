import Donation from "./Donation";

const RecentDonations = (props) => {
  const {donations} = props; 

  let donationListItems = donations.map(donation =>{
    return (
      <Donation 
        name={donation.name} 
        caption={donation.caption}
        amount={donation.amount}       
      />
    );
  });

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationListItems}        
      </ul>
    </section>    
  );
};

export default RecentDonations;
