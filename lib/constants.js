const SERVICE = {
  daemon: 'daemon',
  fullNode: 'silicoin_full_node',
  farmer: 'silicoin_farmer',
  harvester: 'silicoin_harvester',
  wallet: 'silicoin_wallet',
  walletUi: 'wallet_ui',
  plotter: 'silicoin plots create',
};
const SERVICE_TYPE = {
  fullNode: 1,
  harvester: 2,
  farmer: 3,
  timelord: 4,
  introducer: 5,
  wallet: 6,
};
const PLOTTING_STATE = {
  queued: 'SUBMITTED',
  running: 'RUNNING',
  error: 'ERROR',
  deleted: 'DELETED',
  finished: 'FINISHED',
};

module.exports = {
  SERVICE,
  SERVICE_TYPE,
  PLOTTING_STATE,
};
