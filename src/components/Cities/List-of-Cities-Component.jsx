const List_of_cities = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-xl md:text-3xl  font-bold text-green-700 text-center">Mole Busters Proudly Services the Following Cities:</h1>
      <div className="text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Alameda County</h2>
        <p>
          Alameda, Albany, Berkeley, Dublin, Emeryville, Fremont, Hayward,
          Livermore, Newark, Oakland, Piedmont, Pleasanton, San Leandro, Union
          City
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Contra Costa County</h2>
        <p>
          Antioch, Brentwood, Clayton, Concord, Danville, El Cerrito, Hercules,
          Lafayette, Martinez, Moraga, Oakley, Orinda, Pinole, Pittsburg,
          Pleasant Hill, Richmond, San Pablo, San Ramon, Walnut Creek
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Marin County</h2>
        <p>
          Belvedere, Corte Madera, Fairfax, Larkspur, Mill Valley, Novato, Ross,
          San Anselmo, San Rafael, Sausalito, Tiburon
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Napa County</h2>
        <p>American Canyon, Calistoga, Napa, St. Helena, Yountville</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">San Francisco County</h2>
        <p>San Francisco</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">San Mateo County</h2>
        <p>
          Atherton, Belmont, Brisbane, Burlingame, Colma, Daly City, East Palo
          Alto, Foster City, Half Moon Bay, Hillsborough, Menlo Park, Millbrae,
          Pacifica, Portola Valley, Redwood City, San Bruno, San Carlos, San
          Mateo, South San Francisco, Woodside
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Santa Clara County</h2>
        <p>
          Campbell, Cupertino, Gilroy, Los Altos, Los Altos Hills, Los Gatos,
          Milpitas, Monte Sereno, Morgan Hill, Mountain View, Palo Alto, San
          Jose, Santa Clara, Saratoga, Sunnyvale
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Solano County</h2>
        <p>
          Benicia, Dixon, Fairfield, Rio Vista, Suisun City, Vacaville, Vallejo
        </p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-green-700">Sonoma County</h2>
        <p>
          Cloverdale, Cotati, Healdsburg, Petaluma, Rohnert Park, Santa Rosa,
          Sebastopol, Sonoma, Windsor
        </p>
      </div>
    </div>
  );
};

export default List_of_cities;
