const Progress = (props) => {
  const {donations, targetAmount} = props;

  let totalRaised  = 0;
  donations.forEach( donation => {  
    totalRaised += donation.amount;
  });

  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${totalRaised}</span> of
        <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>    
  )
};

export default Progress;
