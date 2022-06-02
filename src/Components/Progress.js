const Progress = (props) => {
  const {donations, targetAmount} = props;
  let totalRaised = donations.map(donation => donation.amount).reduce((a, b) => a + b);

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
