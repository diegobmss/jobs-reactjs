import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Subscribe from '../Subscribe';

import { StyledModal } from './styles';

const Modal = (props: { modal: boolean; handleModal: any; jobSlug: String; companySlug: String; }) => {
  // eslint-disable-next-line react/prop-types
  const { modal, handleModal, jobSlug, companySlug } = props;
  const { loading, data } = useQuery(
    gql`
      query {
        job(
          input: {
            jobSlug: "${jobSlug}"
            companySlug: "${companySlug}"
          }
        ) {
          id
          title
          slug
          cities {
            name
            slug
            country {
              name
              type
            }
          }
          description
          applyUrl
          company {
            name
            logoUrl
          }
        }
      }
    `
  );

  if (loading) {
    return (
      <StyledModal className={`modal ${modal && 'is-active'}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <section className="modal-card-body">
            <progress className="progress is-small" max="100" />
          </section>
        </div>
      </StyledModal>
    );
  }

  return (
    <StyledModal className={`modal ${modal && 'is-active'}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{data.job.title}</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={handleModal}
          />
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column">
              <img
                src={`${data.job.company.logoUrl ||
                  'https://picsum.photos/id/1/400/400'}`}
                alt={data.job.title}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column no-padding-top no-padding-bottom">
              <strong>Empresa: {data.job.company.name}</strong>
            </div>
          </div>
          {data.job.cities.length > 0 ? (
            <div className="columns">
              <div className="column no-padding-top">
                <strong className="company">
                  Local: {data.job.cities[0].name} |{' '}
                  {data.job.cities[0].country.name}
                </strong>
              </div>
            </div>
          ) : (
            <div style={{ height: '15px' }} />
          )}
          <div className="columns">
            <div className="column no-padding-top">
              <span className="description">{data.job.description}</span>
            </div>
          </div>
        </section>
        <Subscribe />
      </div>
    </StyledModal>
  );
};

export default Modal;
