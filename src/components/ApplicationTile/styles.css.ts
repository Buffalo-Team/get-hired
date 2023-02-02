import { style } from '@vanilla-extract/css';
import { vars } from '~/theme.css';

export default {
  root: style({
    display: 'flex',
    height: 100,
    width: '100%',
    minWidth: 320,
  }),
  aside: style({
    height: '100%',
    width: 3,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: vars.palette.status.hired,
  }),
  main: style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 12,
  }),
  row: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  statusDot: style({
    width: 6,
    height: 6,
    borderRadius: '50%',
  }),
  statusWrapper: style({
    display: 'flex',
    columnGap: 4,
    alignItems: 'center',
  }),
  link: style({
    color: vars.palette.neutral.main,
  }),
  salary: style({
    color: vars.palette.secondary.main,
  }),
  sent: style({
    backgroundColor: vars.palette.status.sent,
  }),
  inProgress: style({
    backgroundColor: vars.palette.status.inProgress,
  }),
  rejected: style({
    backgroundColor: vars.palette.status.rejected,
  }),
  accepted: style({
    backgroundColor: vars.palette.status.accepted,
  }),
  hired: style({
    backgroundColor: vars.palette.status.hired,
  }),
  archived: style({
    backgroundColor: vars.palette.status.archived,
  }),
};
