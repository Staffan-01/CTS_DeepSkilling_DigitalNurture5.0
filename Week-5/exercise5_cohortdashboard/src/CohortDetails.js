import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const { cohortName, status, trainer, duration, startDate, endDate } = cohort;
  const statusClass = status === 'ongoing' ? styles.ongoing : styles.completed;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{cohortName}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
        <dt>Duration</dt>
        <dd>{duration}</dd>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>End Date</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
