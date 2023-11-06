import PropTypes from 'prop-types';

const SubmittedCard = ({assignment}) => {
    const {_id,pdfUrl,note,status,title,imgUrl,mark,examineeName,examineeEmail} = assignment || {};
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className='w-2/5'>
        <img
          src={imgUrl}
          alt={title}
          className='h-full'
        />
      </figure>
      <div className="p-5 w-3/5">
        <h2 className="card-title text-[#1A064E]">{title}</h2>
        <div className='my-4 space-y-2'>
        <p className='font-medium text-gray-500'>Full Marks: <span>{mark}</span></p>
        <p className='font-medium text-gray-500'>Examinee: <span>{examineeName}</span></p>
        </div>
        <div className="flex justify-end">
          <button className="btn bg-[#6440FA] rounded-lg capitalize font-semibold text-white hover:text-black hover:bg-secondary">Give Mark</button>
        </div>
      </div>
    </div>
  );
};

SubmittedCard.propTypes = {
    assignment: PropTypes.object,
}

export default SubmittedCard;
