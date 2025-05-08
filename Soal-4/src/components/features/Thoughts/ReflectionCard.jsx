const ReflectionCard = ({ reflection }) => {
    return (
      <div className="bg-white p-8 rounded-2xl shadow">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">“{reflection.message}”</p>
        <div className="flex items-center gap-4">
          <img
            src={reflection.image}
            alt={reflection.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-800">{reflection.name}</h4>
            <p className="text-lg text-gray-500">{reflection.role}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReflectionCard;