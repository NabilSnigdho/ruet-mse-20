import MiniSearch from 'minisearch';
import students from 'assets/students.json';
import { Student } from 'components/models';

const collegeNameTerms = new Set(['school', 'and', 'college']);

export const miniSearch = new MiniSearch<Student>({
  fields: [
    'fullName',
    'id',
    'shortName',
    'nickNames',
    'collegeName',
    'homeDistrict',
    'email',
    'phone',
  ], // fields to index for full-text search
  storeFields: ['id'], // fields to return with search results
  extractField: (document, fieldName) => {
    if (fieldName === 'id') return (document.id % 100).toString();
    if (fieldName === 'nickNames') return document.nickNames?.join(' ') ?? '';
    if (fieldName === 'phone')
      return Array.isArray(document.phone)
        ? document.phone.join(' ')
        : document.phone ?? '';

    const fieldExists = (fieldName: string): fieldName is keyof Student =>
      fieldName in document;
    if (fieldExists(fieldName)) {
      const value = document[fieldName];
      if (typeof value === 'string') return value;
    }
    return '';
  },
  tokenize: (string, fieldName) => {
    if (fieldName === 'email') {
      return string.includes('@') ? [string, string.split('@')[1]] : [''];
    } else if (fieldName === undefined && string.includes('@')) {
      return [string];
    }
    return MiniSearch.getDefault('tokenize')(string, fieldName);
  },
  processTerm: (term, fieldName) => {
    if (
      fieldName === 'collegeName' &&
      collegeNameTerms.has(term.toLocaleLowerCase())
    )
      return null;
    return MiniSearch.getDefault('processTerm')(term, fieldName);
  },
});

// Index all documents
miniSearch.addAll(students);

export const searchStudents = (query: string) => {
  let results = miniSearch.search(query);
  if (results.length === 0)
    results = miniSearch.search(query, { prefix: true });
  if (results.length === 0) results = miniSearch.search(query, { fuzzy: 0.2 });
  return results;
};
