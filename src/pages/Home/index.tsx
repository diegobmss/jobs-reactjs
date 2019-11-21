import React, { useState } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Modal from '../../components/Modal';

import { JobList } from './styles';

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      description
      applyUrl
      slug
      company {
        name
        slug
        logoUrl
      }
      locationNames
      userEmail
    }
  }
`;

const App = () => {
  const [modal, setModal] = useState(false);
  const [jobSlug, setJobSlug] = useState('');
  const [companySlug, setCompanySlug] = useState('');
  const { loading, data } = useQuery(GET_JOBS);

  const handleModal = (job = '', company = '') => {
    setModal(!modal);
    setJobSlug(job);
    setCompanySlug(company);
  };

  if (loading) {
    return <progress className="progress is-small" max="100" />;
  }

  return (
    <>
      <div className="columns is-multiline">
        {data.jobs.map((job: { id: string | number | undefined; company: { logoUrl: any; name: React.ReactNode; slug: string | undefined; }; title: string; description: { slice: (arg0: number, arg1: number) => void; }; slug: string | undefined; }) => (
          <div className="column is-4 is-flex" key={job.id}>
            <JobList>
              <div className="columns">
                <div className="column">
                  <img
                    src={`${job.company.logoUrl ||
                      'https://picsum.photos/id/1/400/400'}`}
                    alt={job.title}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column no-padding-top no-padding-bottom">
                  <strong>{job.title}</strong>
                </div>
              </div>
              <div className="columns">
                <div className="column no-padding-top">
                  <strong className="company">
                    Empresa: {job.company.name}
                  </strong>
                </div>
              </div>
              <div className="columns">
                <div className="column no-padding-top">
                  <span className="description">{`${job.description.slice(
                    0,
                    150
                  )}...`}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleModal(job.slug, job.company.slug)}
              >
                <div>
                  <MdThumbUp size={16} color="#FFF" />
                </div>

                <span>CANDIDATAR-SE</span>
              </button>
            </JobList>
          </div>
        ))}
      </div>

      {modal && (
        <Modal
          modal={modal}
          handleModal={handleModal}
          jobSlug={jobSlug}
          companySlug={companySlug}
        />
      )}
    </>
  );
};

export default App;
